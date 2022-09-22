import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	*{
		box-sizing:border-box;
	}

	body {
		width: 100%;
		position:relative;
		font-family:'Source Sans Pro', sans-serif;
		color:#fff;
		line-height:1.2;
		background-color : #182747;
		overflow-x:hidden;
	}
	#root {
		position:relative;
		width:100%;
		height:100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
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
