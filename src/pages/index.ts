import type { APIRoute } from "astro";

export const GET:APIRoute = ({ redirect })=>{
    return redirect('/business',302)
}