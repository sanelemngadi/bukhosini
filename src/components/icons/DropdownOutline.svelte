<script lang="ts">
    import Icon from "./ICON.svelte";
  
      export let size: number = 16;
      export let color: string = "#000"; // # = %23
      export let bg: string = "#fff";
      const svg = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_749_6519)">
            <mask id="mask0_749_6519" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
            <path d="M15.1579 0H0V16H15.1579V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_749_6519)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 10.4712C7.90697 10.5962 7.74636 10.6664 7.57889 10.6664C7.41141 10.6664 7.25079 10.5962 7.13236 10.4712L3.55951 6.69991C3.49919 6.63841 3.45108 6.56484 3.41798 6.48351C3.38488 6.40217 3.36745 6.3147 3.36672 6.22617C3.366 6.13766 3.38198 6.04986 3.41373 5.96793C3.44549 5.886 3.49238 5.81156 3.55168 5.74897C3.61098 5.68638 3.6815 5.63688 3.75912 5.60336C3.83674 5.56984 3.91991 5.55297 4.00377 5.55374C4.08763 5.5545 4.1705 5.5729 4.24756 5.60784C4.32462 5.64278 4.39431 5.69356 4.45257 5.75723L7.57889 9.05723L10.7052 5.75723C10.8243 5.63579 10.9838 5.5686 11.1495 5.57012C11.315 5.57164 11.4734 5.64175 11.5906 5.76536C11.7076 5.88896 11.7741 6.05617 11.7755 6.23097C11.7769 6.40577 11.7133 6.57417 11.5983 6.69991L8.0254 10.4712Z" fill="%color%"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_749_6519">
            <rect width="15.1579" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        `;
  </script>
  
<Icon svgString={svg} {size} {color} {bg} />        