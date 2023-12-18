import {RegisterDto} from "@auth/dto";
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({name: "IsPasswordsMathing", async: false})
export class IsPasswordsMathingConstraint implements ValidatorConstraintInterface {
  validate(passwordRepeat: string, args: ValidationArguments) {
    const obj = args.object as RegisterDto;
    return obj.password === passwordRepeat;
  }

  defauktMessage(validationArguments?: ValidationArguments): string {
    return "Пароли не совпадают";
  }
}
