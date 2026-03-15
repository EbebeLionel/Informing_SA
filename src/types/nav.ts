export interface DropdownItem {
  label: string;
  href?: string;
  description?: string;
}

export interface DropdownSection {
  sectionLabel: string;
  items: DropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  sections: DropdownSection[];
}
