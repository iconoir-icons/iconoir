import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Undo extends StatelessWidget {
  const Undo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Undo.svg');
}
