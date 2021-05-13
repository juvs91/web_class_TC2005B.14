import createError from "http-errors"

export default (tokenService) => {
  return async (req, res, next) => {
    let extractCredentials = (request) => {
      if (!request.headers.authorization) {
        // throw new HttpErrors.Unauthorized(`Authorization header not found.`);
        throw createError(401, `Authorization header not found.`)
      }
    
      // for example : Bearer xxx.yyy.zzz
      const authHeaderValue = request.headers.authorization;
    
      if (!authHeaderValue.startsWith('Bearer')) {
        throw createError(401, `Authorization header is not of type 'Bearer'.`)
      }
    
      //split the string into 2 parts : 'Bearer ' and the `xxx.yyy.zzz`
      const parts = authHeaderValue.split(' ');
      if (parts.length !== 2) {
        throw createError(401, `Authorization header value has too many parts. It must follow the pattern: 'Bearer xx.yy.zz' where xx.yy.zz is a valid JWT token.`,)
      }
      const token = parts[1];
    
      return token;
    }
    try {
      const token = extractCredentials(req)
      const userProfile = await tokenService.verifyToken(token)
      req.userProfile = userProfile
      return next()
    } catch (err) {
      console.log(err)
      res.status(err.status).send({ error: err.message })
      return next()
    }
  }
}

