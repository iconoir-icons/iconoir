import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WarningWindow extends StatelessWidget {
  const WarningWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/WarningWindow.svg');
}
