import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FolderSettings extends StatelessWidget {
  const FolderSettings({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FolderSettings.svg');
}
