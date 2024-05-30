import { Button } from '@chakra-ui/react';
import { AutoCompleteAddress, Directions } from '@aloxe-frontend/util-bing-map';
import { useCallback, useState } from 'react';

type SelectAddressProps = {
  onChange: (addresses?: Directions) => void;
};

export function SelectAddress({ onChange }: SelectAddressProps) {
  const [addresses, setAddresses] = useState<Directions>();

  const onAddressChange = useCallback(
    (key: 'from' | 'to') => (value?: Microsoft.Maps.ISuggestionResult) =>
      setAddresses((prev) => ({ ...prev, [key]: value })),
    []
  );

  return (
    <>
      <AutoCompleteAddress
        id="autoSuggestFrom"
        marginBottom="16px"
        onChange={onAddressChange('from')}
      />
      <AutoCompleteAddress
        id="autoSuggestTo"
        marginBottom="16px"
        onChange={onAddressChange('to')}
      />
      <Button
        w="full"
        borderRadius="100"
        colorScheme="whatsapp"
        isDisabled={!addresses?.from || !addresses.to}
        onClick={() => onChange(addresses)}
      >
        Xác nhận
      </Button>
    </>
  );
}
