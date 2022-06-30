import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OpenInWindow extends StatelessWidget {
  const OpenInWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/OpenInWindow.svg');
}
