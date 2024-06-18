<script lang="ts">
  import Icon from "../ICON.svelte";

  export let size: number = 16;
  export let color: string = "#000"; // # = %23
  export let bg: string = "#fff";
  export let disabled: boolean = false;
  const svg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1461_29)">
        <path d="M8.96031 6.81152L1.62305 14.8825" stroke="%color%" stroke-width="1"/>
        <path d="M14.8931 0.808461C14.8746 0.343751 14.4828 -0.0179027 14.0181 0.000685628L6.44518 0.303601C5.98047 0.322189 5.61881 0.71398 5.6374 1.17869C5.65599 1.6434 6.04778 2.00506 6.5125 1.98646L13.2439 1.71721L13.5132 8.44869C13.5318 8.91336 13.9236 9.27504 14.3883 9.25643C14.853 9.23782 15.2146 8.84608 15.1961 8.38135L14.8931 0.808461ZM13.4329 0.270935L12.8827 0.867086L14.1202 2.00945L14.6706 1.4133L13.4329 0.270935ZM11.782 2.05939L10.6815 3.25169L11.9191 4.39406L13.0196 3.20176L11.782 2.05939ZM9.58087 4.444L9.03059 5.04016L10.2682 6.18252L10.8184 5.58637L9.58087 4.444Z" fill="%color%"/>
        </g>
        <defs>
        <clipPath id="clip0_1461_29">
        <rect width="14.3158" height="16" fill="white" transform="translate(1)"/>
        </clipPath>
        </defs>
        </svg>
`;
</script>

<Icon svgString={svg} {size} {color} {bg} {disabled} />
