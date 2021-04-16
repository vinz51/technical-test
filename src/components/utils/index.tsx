
export const getInitials = (name: string): string => name.split(" ").splice(0, 2).map((name) => name.charAt(0)).join("").toUpperCase();
