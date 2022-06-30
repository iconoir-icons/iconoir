import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CursorPointer extends StatelessWidget {
  const CursorPointer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CursorPointer.svg');
}
