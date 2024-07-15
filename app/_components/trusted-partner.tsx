import Image from 'next/image'
import React from 'react'
import { FadeIn, FadeInStagger } from '../../components/FadeIn';


interface ITrustedPartner {
    partners: {
        partnerName: string;
        partnerImage: string
    }[]
}
export default function TrustedPartner({ partners }: ITrustedPartner) {
    return (
        <div className="mx-auto mt-10 flex flex-wrap gap-6 justify-evenly">
            {partners.map(({ partnerImage, partnerName }, index) =>
                <FadeIn key={index}>
                    <Image
                        src={partnerImage}
                        alt={partnerName}
                        width={180}
                        height={40}
                        className="max-h-24  object-contain" />
                </FadeIn>
            )
            }

        </div>
    )
}
