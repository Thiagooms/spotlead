import { redirect } from 'next/navigation'
import { PipelinePageClient } from '@/components/pipeline/PipelinePageClient'
import { createClient } from '@/lib/supabase/server'

export default async function PipelinePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <PipelinePageClient />
}
