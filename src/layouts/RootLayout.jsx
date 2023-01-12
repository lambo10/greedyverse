import React from 'react'

function RootLayout({children}) {
  return (
    <>
     {/* <MainNavigation /> */}
      <main>{children}</main>
    </>
   
  )
}

export default RootLayout