import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Puzzle extends StatelessWidget {
  const Puzzle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Puzzle.svg');
}
