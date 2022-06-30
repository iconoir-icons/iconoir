import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RemoveSquare extends StatelessWidget {
  const RemoveSquare({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RemoveSquare.svg');
}
