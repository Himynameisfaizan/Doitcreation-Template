import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import DarkClass from '@/components/classes/DarkClass'
import FooterV1 from '@/components/footer/FooterV1'
import HeaderV1 from '@/components/header/HeaderV1'
import Return_refund from '@/components/policy/Return_refund'
import React from 'react'

const page = () => {
  return (
   <>
   <HeaderV1 />
   <Breadcrumb title="Return Policy" breadCrumb='return & refund policy'/>
   <Return_refund />
   <DarkClass />
   <FooterV1 />
   </>
  )
}

export default page