import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import DarkClass from '@/components/classes/DarkClass'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Terms from '@/components/terms/Terms'
import React from 'react'

const page = () => {
  return (
    <>
    <HeaderV1 />
    <Breadcrumb title="Terms & Condition" breadCrumb="terms & condition" />
    <Terms />
    <DarkClass />
    <FooterV1 />
    </>
  )
}

export default page