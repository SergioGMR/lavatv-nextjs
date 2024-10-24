"use client"

import { useState, useEffect } from "react"
import { hcprofiles, guestProfile } from "@/data/profiles"
import { Profile } from "@/types/Profile"
import { createCurrentProfileStore } from '@/hooks/useStore'
const localStorage = typeof window !== "undefined" ? window.localStorage : null
const useStore = createCurrentProfileStore()
const [profiles, setProfiles] = useState(([] as Profile[]))
useEffect(() => {
    if (localStorage) {
        const savedProfiles = localStorage.getItem("profiles")
        if (savedProfiles) {
            setProfiles(JSON.parse(savedProfiles))
        } else {
            setProfiles(hcprofiles as Profile[])
            localStorage.setItem("profiles", JSON.stringify(hcprofiles))
        }
        const savedCurrentProfile = localStorage.getItem("currentProfile")
        if (savedCurrentProfile) {
            useStore.setState(JSON.parse(savedCurrentProfile))
        }
    }
}, [])
