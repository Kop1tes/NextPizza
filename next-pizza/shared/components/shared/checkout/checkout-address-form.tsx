import { useFormContext, Controller } from "react-hook-form";
import { AddressAutocomplete } from "../address-autocomplete";
import { WhiteBlock } from "../whtie-block";
import { FormTextarea } from "../form";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    const { control } = useFormContext();

    return (
        <WhiteBlock title="3. Адрес доставки" className={className}>
            <div className="flex flex-col gap-5">
                <Controller
                    name="address"
                    control={control}
                    render={({ field, fieldState }) => (
                        <>
                            <AddressAutocomplete
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="Введите адрес"
                            />
                            {fieldState.error?.message && (
                                <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                            )}
                        </>
                    )}
                />

                <FormTextarea
                    name="comment"
                    className="text-base"
                    placeholder="Комментарий к заказу"
                    rows={5}
                />
            </div>
        </WhiteBlock>
    );
};
