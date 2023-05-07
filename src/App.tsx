import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { SettingsList } from "./SettingsList";

const theme = extendTheme({
  components: {
    Switch: {
      baseStyle: {
        track: {
          borderRadius: "full", 
          borderWidth: "1px", 
          borderColor: "gray.700", 
          overflow:'hidden',
          bg:'#484d53',
          _checked: {
            bg: "#457785", 
          },
          _active: {
            borderColor: "white", 
          },
          _focus: {
            borderColor: "white", 
          },
        },
        thumb: {
          bg: "white", 
          borderRadius: "full", 
          transform: 'translate(0%)',
          _checked: {
            transform: "translateX(180%)", 
            width: ".6rem",        
          },
        
        },
      },
    }
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <SettingsList/>
  </ChakraProvider>
)
