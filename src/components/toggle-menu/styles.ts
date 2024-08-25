import { css } from "@styled-system/css";

export const ToggleMenuRootStyle = css({
  display: 'flex',

  width: '100%',

  border: 'hsla(281, 26%, 19%, 1) 1px solid',
  padding: '1',

  borderRadius: 'md'
})

export const toggleMenuItemStyle = css({
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'center',

  gap: 1,

  paddingBlock: 2.5,

  width: '100%',

  borderRadius: 'md',

  cursor: 'pointer',

  flex: 1,

  '& > svg path': {
    fill: 'muted'
  },

  '& > p': {
    display: 'none'
  },

  _hover: {
    bg: 'linear-gradient(hsla(317, 100%, 50%, 1), hsla(2, 100%, 70%, 1))',

    flexGrow: 2,

    transition: 'flex-grow .2s ease-in-out',

    '& > p': {
      display: 'block'
    },

    '& > svg path': {
      fill: 'white'
    }
  }
})
