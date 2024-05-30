import { ComponentProps, useEffect, useMemo, useRef } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  InputRightElement,
} from '@chakra-ui/react';
import { MdClose, MdLocationPin } from 'react-icons/md';
import { useBingMapStore } from '../hooks';

type AutoCompleteAddressProps = {
  id: string;
  disabled?: boolean;
  onChange: (sugestion?: Microsoft.Maps.ISuggestionResult) => void;
} & Omit<ComponentProps<typeof InputGroup>, 'id' | 'onChange'>;

export function AutoCompleteAddress({
  id,
  disabled,
  onChange,
  ...props
}: AutoCompleteAddressProps) {
  const { map } = useBingMapStore();
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const IDS = useMemo(
    () => ({
      container: id,
      input: `${id}_input`,
    }),
    [id]
  );

  const clear = () => {
    inputRef.current!.value = '';
    onChange(undefined);
    console.log('clear');
  };

  useEffect(() => {
    if (map) {
      Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
        const manager = new Microsoft.Maps.AutosuggestManager({
          map,
          maxResults: 4,
        });
        setTimeout(() => {
          manager.attachAutosuggest(
            `#${IDS.input}`,
            `#${IDS.container}`,
            onChange
          );
        }, 400);
      });
    }
  }, [map, IDS, onChange]);

  return (
    <InputGroup
      id={IDS.container}
      ref={containerRef}
      w="full"
      {...props}
      bg="transparent"
      isolation="auto"
      sx={{
        '.MicrosoftMap': {
          width: 'full',
          top: '100%',
          [`#as_containerSearch_${IDS.input}`]: {
            width: 'full',
          },
          '.clear': {
            display: 'none',
          },
        },
      }}
    >
      <InputLeftElement>
        <Icon as={MdLocationPin} />
      </InputLeftElement>
      <Input
        ref={inputRef}
        id={IDS.input}
        disabled={disabled}
        bg="white"
        placeholder="Bạn muốn đi đâu ?"
      />
      <InputRightElement onClick={clear}>
        <Icon as={MdClose} />
      </InputRightElement>
    </InputGroup>
  );
}
