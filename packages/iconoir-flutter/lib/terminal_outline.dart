import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TerminalOutline extends StatelessWidget {
  const TerminalOutline({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TerminalOutline.svg');
}
