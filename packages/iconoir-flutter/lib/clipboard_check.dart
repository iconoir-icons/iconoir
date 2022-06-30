import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClipboardCheck extends StatelessWidget {
  const ClipboardCheck({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ClipboardCheck.svg');
}
