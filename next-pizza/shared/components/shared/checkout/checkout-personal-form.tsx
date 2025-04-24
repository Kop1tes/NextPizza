import React from "react";
import { WhiteBlock } from "../whtie-block";
import { FormInput } from "../form";
import { Input } from "../../ui";

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
                <Input name="firstName" className="text-base" placeholder="Имя" />
                <Input name="lastName" className="text-base" placeholder="Фамилия" />
                <Input name="email" className="text-base" placeholder="E-Mail" />
                <FormInput name="phone" className="text-base" placeholder="Телефон" />
            </div>
        </WhiteBlock>
    );
}