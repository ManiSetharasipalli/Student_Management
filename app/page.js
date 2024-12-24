// Redirects the user from the home page to the students page
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/students');
}