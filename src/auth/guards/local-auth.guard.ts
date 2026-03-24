import { ExecutionContext } from "@nestjs/common"
import {AuthGuard} from "@nestjs/passport"
import { Observable } from "rxjs"

//todo guard tem uma estratégia

export class LocalAuthGuard extends AuthGuard('local'){

canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // todo guard possui uma função canActivate que diz se ele pode acessar a rota ou não
    return super.canActivate(context)
}

}