import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'InsuranceClaimsInfo.com — California Insurance Claim Help & Resources'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#1F3964',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              backgroundColor: '#C9A84C',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 700,
              padding: '8px 20px',
              borderRadius: '20px',
              marginBottom: '30px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            California Insurance Claim Help
          </div>
          <div
            style={{
              display: 'flex',
              color: '#FFFFFF',
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '20px',
              maxWidth: '900px',
              textAlign: 'center',
            }}
          >
            InsuranceClaimsInfo.com
          </div>
          <div
            style={{
              display: 'flex',
              color: '#BDD7EE',
              fontSize: '24px',
              lineHeight: 1.5,
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            Free tools, guides, and expert resources for California policyholders navigating insurance claims
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              color: '#C9A84C',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Leland Coontz III · CA Public Adjuster License #2B53445
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
