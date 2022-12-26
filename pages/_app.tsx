import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react'
 import { SSRProvider } from '@react-aria/ssr'
 

const darkTheme = createTheme({
	type: 'dark'
})



 function App({ Component, pageProps }: AppProps) {
  return (
		<SSRProvider>
			
				<NextUIProvider theme={darkTheme}>
					<Component {...pageProps} />
				</NextUIProvider>
			
		</SSRProvider>
  )
}


export default App