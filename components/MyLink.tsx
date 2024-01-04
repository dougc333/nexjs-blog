
import Link from 'next/link'
import React from 'react'

//https://blog.logrocket.com/dealing-links-next-js/

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  to:String;
}

const MyLink = React.forwardRef(({ to, ...props }: IProps, ref:any) =>{
  return (
    <Link legacyBehavior href={to} passHref>
      <a {...props} ref= {ref} />
    </Link>
  )
})

export default MyLink;
