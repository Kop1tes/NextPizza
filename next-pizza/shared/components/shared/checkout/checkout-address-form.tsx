import React from "react";
import { WhiteBlock } from "../whtie-block";
import { FormTextarea } from "../form";
import { useFormContext } from "react-hook-form";
import { AddressAutocomplete } from "../address-autocomplete";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    const { setValue } = useFormContext();

    return (
        <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
                <AddressAutocomplete name="address" />
                <FormTextarea
                    name="comment"
                    className="text-base"
                    placeholder="Комментарий к заказу"
                    rows={5}
                />
            </div>
        </WhiteBlock>
    );
}