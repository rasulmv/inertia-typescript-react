import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sleep(ms = 500): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getNameInitialsForAvatar(fullName: string): string {
    if (fullName.split(' ').length == 1) {
        return 'TT'
    }

    return fullName
        .split(' ')
        .map((name) => name[0])
        .join('')
}
