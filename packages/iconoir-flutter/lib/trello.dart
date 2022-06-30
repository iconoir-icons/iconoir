import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Trello extends StatelessWidget {
  const Trello({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Trello.svg');
}
