'use client'
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value  placeholder="Select a country..." className="text-black"/>
          <SelectPrimitive.Icon>
            <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content 
          side='bottom'
          sideOffset={8} 
          position='popper' 
          className='z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width]'>
          <SelectPrimitive.Viewport >
            <SelectPrimitive.Item value='br' className='flex justify-between items-center gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 overflow-hidden`'>
              <SelectPrimitive.ItemText className='text-black'>
                Brasil
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className='h-4 w-4 text-violet-500'/>
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item value='us' className='flex justify-between items-center gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50'>
              <SelectPrimitive.ItemText className='text-black'>
                United State
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className='h-4 w-4 text-violet-500'/>
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>


    </SelectPrimitive.Root>
  )
}