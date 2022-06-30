import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TerminalSimple extends StatelessWidget {
  const TerminalSimple({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TerminalSimple.svg');
}
