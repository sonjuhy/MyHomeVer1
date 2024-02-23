const pathPocket = {
  androidPath:
    "M6 8l.001 9.444c0 .861.696 1.556 1.557 1.556h.442v3.542c0 .804.707 1.458 1.51 1.458.806 0 1.49-.654 1.49-1.459v-3.541h2v3.542c0 .804.707 1.458 1.511 1.458.806 0 1.489-.654 1.489-1.459v-3.541l.444-.001c.858 0 1.556-.696 1.556-1.557v-9.442h-12zm16 1.471c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm-17 0c0-.805-.695-1.471-1.5-1.471-.805-.001-1.5.667-1.5 1.472v6.106c0 .806.694 1.422 1.5 1.422.805 0 1.5-.615 1.5-1.422v-6.107zm9.951-7.312l.94-1.859c.068-.132-.019-.3-.163-.3-.066 0-.13.038-.164.105l-.949 1.878c-1.531-.737-3.544-.812-5.229 0l-.95-1.878c-.033-.067-.097-.105-.164-.105-.144 0-.231.168-.163.3l.94 1.859c-1.845 1.034-3.049 2.584-3.049 4.84h12c0-2.256-1.204-3.806-3.049-4.84zm-5.45 2.841c-.276 0-.501-.224-.501-.5 0-.274.225-.5.501-.5s.499.226.499.5c0 .276-.223.5-.499.5zm4.998 0c-.276 0-.499-.224-.499-.5 0-.274.223-.5.499-.5s.501.226.501.5c0 .276-.225.5-.501.5z",
  homePath:
    "M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z",
  wifiPath:
    "M4.504 13.572l-1.505-1.489c2.201-2.805 5.413-4.583 9.001-4.583s6.8 1.779 9 4.583l-1.504 1.489c-1.835-2.338-4.512-3.822-7.496-3.822s-5.661 1.484-7.496 3.822zm7.496.678c1.791 0 3.397.891 4.498 2.293l1.502-1.488c-1.467-1.869-3.608-3.055-6-3.055s-4.533 1.186-6 3.055l1.502 1.488c1.101-1.402 2.707-2.293 4.498-2.293zm0 2.25c-1.196 0-2.258.602-2.99 1.536l2.99 2.964 2.99-2.963c-.732-.935-1.794-1.537-2.99-1.537zm0-11.25c4.179 0 7.927 2.078 10.495 5.351l1.505-1.491c-2.935-3.739-7.217-6.11-12-6.11s-9.065 2.371-12 6.11l1.505 1.491c2.568-3.273 6.316-5.351 10.495-5.351z",
  cloudPath:
    "M18.5 20h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408",
  etcPath:
    "M6.914 2.741l15.557 15.556-4.243 4.243-15.556-15.557 4.242-4.242zm-.707-.707l-2.033-2.034-4.174 4.243 1.965 2.034 4.242-4.243zm12.821 21.119l4.972.847-.918-4.901-4.054 4.054zm-4.567-15.694l.389-.388.707.707.707-.707-.707-.707.707-.707.707.707.708-.708-.707-.706 2.121-2.121 2.121 2.121-4.631 4.631 1.393 1.393 6.024-6.024-4.908-4.95-6.045 6.045 1.414 1.414zm-4.949 9.193l-4.562 4.561-2.121-2.121.707-.708.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.706.319-.319-1.415-1.415-5.975 5.976 4.95 4.908 5.955-5.955-1.393-1.393zm9.934-11.349c.195-.195.195-.512 0-.707s-.512-.195-.707 0-.195.512 0 .707.512.196.707 0z",
  internetPath:
    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.73 20.183c-.106-.526-.236-1.046-.398-1.555.897-.811.86-2.197-.072-2.883.582-2.318.61-4.849-.002-7.288.186-.111.348-.254.475-.425 1.466.412 2.831 1.066 4.052 1.911.14.665.215 1.352.215 2.057 0 3.382-1.692 6.372-4.27 8.183zm-15.73-8.183c0-.855.12-1.682.323-2.475.699-.044 1.393-.04 2.147.032l.04.226c-.921.775-1.75 1.661-2.487 2.674l-.023-.457zm3.183-1.19c.848.643 2.083.436 2.662-.49 2.898 1.06 5.339 3.077 6.94 5.666-.766.775-.756 1.998.019 2.695-.681 1.231-1.548 2.345-2.56 3.307-4.902.117-8.924-3.262-9.969-7.697.772-1.316 1.755-2.494 2.908-3.481zm2.886-1.901c1.991-.974 4.155-1.432 6.324-1.377.305.611.93 1.076 1.666 1.166h.006c.557 2.157.583 4.472.029 6.7l-.223.023c-1.724-2.825-4.433-5.131-7.763-6.301l-.039-.211zm6.062 12.857c.702-.817 1.311-1.695 1.813-2.627l.27-.008c.172.562.308 1.139.408 1.729-.777.406-1.612.714-2.491.906zm7.103-13.598c-1.009-.56-2.076-1.002-3.189-1.311-.108-.995-1.041-1.824-2.119-1.816-.552-1.019-1.232-1.975-2.024-2.854 3.321.642 6.061 2.93 7.332 5.981zm-6.472-2.708c-.257.22-.443.515-.524.858-2.456-.03-4.778.526-6.848 1.565-.85-.638-2.07-.421-2.646.483-.728-.076-1.379-.092-2.024-.072 1.476-3.683 5.076-6.294 9.28-6.294h.001c1.097.994 2.034 2.16 2.761 3.46z",
  githubPath:
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  bloggerPath:
    "M15.5 14.625c0 .484-.387.875-.864.875h-5.273c-.477 0-.863-.392-.863-.875s.387-.875.863-.875h5.272c.478 0 .865.391.865.875zm-6.191-4.375h2.466c.448 0 .809-.392.809-.875s-.361-.875-.81-.875h-2.465c-.447 0-.809.392-.809.875s.362.875.809.875zm14.691 1.75c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.039c0-.383-.311-.692-.691-.692h-1.138c-.583 0-.69-.446-.69-.996-.001-2.36-1.91-4.273-4.265-4.273h-2.952c-2.355 0-4.264 1.913-4.264 4.272v5.455c0 2.36 1.909 4.273 4.264 4.273h5.474c2.353 0 4.262-1.913 4.262-4.272v-3.767z",
  gmailPartsPath:
    "M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z",
  paperPath:
    "M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-16 5h5v-4h-5v4zm12 2h-12v1h12v-1zm0-3h-5v1h5v-1zm0-3h-5v1h5v-1z",
  repositoryPath:
    "M8.022 5h7.955l.333 1h-8.621l.333-1zm-1 3h9.955l-.333-1h-9.289l-.333 1zm.419-6h9.117l2.667 8h2.107l-3.332-10h-12l-3.333 10h2.107l2.667-8zm1.248 1l-.333 1h7.288l-.334-1h-6.621zm15.311 9l-2 12h-20l-2-12h24zm-9 3h-6v2h6v-2zm-8.645-5h11.289l-.333-1h-10.623l-.333 1z",
};
export default pathPocket;
