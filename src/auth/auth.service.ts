import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup(): object {
        return {"msg": "I have signed up"}
    }

    signin(): object {
        return {"msg": "I have signed in bruh"}
    }
}