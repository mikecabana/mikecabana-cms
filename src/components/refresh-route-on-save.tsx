'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation.js'
import React from 'react'

export function RefreshRouteOnSave() {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL || ''}
    />
  )
}
