import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MacOsWindow extends StatelessWidget {
  const MacOsWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MacOsWindow.svg');
}
