import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FingerPrintWindow extends StatelessWidget {
  const FingerPrintWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FingerPrintWindow.svg');
}
