{
  // ? interface type
  // ? interface

  // * type alias

  type UserAlias = {
    name: string;
    age: number;
  };

  const userAliasObj: UserAlias = {
    name: 'user_alias',
    age: 12,
  };

  // * interface type

  interface UserInterface {
    name: string;
    age: number;
  }

  const userInterfaceObj: UserInterface = {
    name: 'user_interface',
    age: 12,
  };

  // * type alias extension

  type UserAliasExtension = UserAlias & { role: string };
  const userAliasExtensionObj: UserAliasExtension = {
    name: 'user_alias_extension',
    age: 12,
    role: 'alias_extension',
  };

  // * interface extension

  interface UserInterfaceExtension extends UserInterface {
    role: string;
  }

  const UserInterfaceExtensionObj: UserInterfaceExtension = {
    name: 'user_alias_extension',
    age: 12,
    role: 'interface_extension',
  };
}
