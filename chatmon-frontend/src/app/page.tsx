
import { redirect } from 'next/navigation'

// Immediate redirect for beter experience for logged in users
export default function Page() { return redirect('./chat') }
