import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
	*{
		box-sizing:border-box;
	}

	body {
		width: 100%;
		height: 100vh;
		position:relative;
		font-family:'Source Sans Pro', sans-serif;
		color: ${(props) => props.theme.font};
		line-height:1.2;
		background-color : ${(props) => props.theme.background};
		overflow-x:hidden;
	}


	h1,h2,h3,h4,h5,h6{
		font-size: inherit;
	}
	a{
		color:inherit;
		text-decoration:none;
	}
	li{
		list-style:none;
	}
	button{
		margin:0;
		padding:0;
		background: transparent;
		border:none;
	}
`
export default GlobalStyle
