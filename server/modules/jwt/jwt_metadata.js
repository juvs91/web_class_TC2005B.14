export default class JWTMetadata {
  constructor(jwtExpiresIn) {
    this.jwtExpiresIn = jwtExpiresIn
  }
	async getPayload (user) {
		let expires = Date.now() + Number(this.jwtExpiresIn);
		return {
			  id: user.id,
      	name: user.name,
			  context: {
			    user: {
			      name: user.name,
			      email: user.email,
			      id: user.id
			    },
			    group: "booker"
			  },
			  aud: process.env.JITSI_AUD || "booker_conferencer",
			  iss: process.env.JITSI_ISS || "booker_conferencer",
			  sub:  "meet.booker",
			  room: "*",
			  expiresIn: Number(this.jwtExpiresIn),
			  exp: expires
		}
	}
	async getHeaders () {
		return {
		  alg: "HS256",
		  typ: "JWT"
		}
	}
}