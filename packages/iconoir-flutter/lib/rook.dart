import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rook extends StatelessWidget {
  const Rook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Rook.svg');
}
