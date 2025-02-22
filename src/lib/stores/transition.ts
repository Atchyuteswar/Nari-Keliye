import { crossfade } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';
import { writable } from 'svelte/store';

export const pageTransitionDuration = writable(300);