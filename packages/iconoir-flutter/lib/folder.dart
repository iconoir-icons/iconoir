import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Folder extends StatelessWidget {
  const Folder({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Folder.svg');
}
