"use client"

import { Mail } from "lucide-react";
import * as FileInput from './components/Form/FileInput';
import { Select } from "./components/Form/Select";
import * as Input from "./components/Input";
import SettingsTabs from "./components/SettingTabs";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl- font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
            type="button" 
            className="border border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm "
            >
              Cancel
            </button>
            <button 
              type="button" 
              form="settings" 
              className="bg-violet-600 text-white hover:bg-violet-700 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
              >
                Save
            </button>
          </div>
        </div>

        <form 
        id="settings" 
        action=""
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label 
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
              >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Antonio"/>
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Carlos"/>
            </Input.Root>
          </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 "
              >
              E-mail address
            </label>
            <Input.Root>
            <Input.Prefix >
            <Mail  className="h-5 t-5 text-zinc-500"/>
            </Input.Prefix>
              <Input.Control id="email" defaultValue="antonie.dev@gmail.com " type="email"/>
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 "
              >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">This will be displayed on your profile.</span>
            </label>
            <div >
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root> 
              
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 "
              >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CEO" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 "
              >
              Country
            </label>
           <Select />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 "
              >
              Timezone
            </label>
            <Input.Root>
              <Input.Control id="timezone" defaultValue="CEO" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 "
              >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">Write a short introduction.</span>
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label 
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 "
              >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">Share a few snippets of your work.</span>
            </label>
            <FileInput.Root  >
              <FileInput.Trigger  />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root> 
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button 
            type="button" 
            className="border border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm "
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="bg-violet-600 text-white hover:bg-violet-700 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
              >
                Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
