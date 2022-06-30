import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UndoCircle extends StatelessWidget {
  const UndoCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/UndoCircle.svg');
}
